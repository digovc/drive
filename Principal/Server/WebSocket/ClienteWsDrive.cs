﻿using Drive.DataBase.Dominio;
using Drive.Server.WebSocket.Cache;
using NetZ.Web.Server;
using NetZ.Web.Server.WebSocket;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Sockets;

namespace Drive.Server.WebSocket
{
    internal class ClienteWsDrive : ClienteWs
    {
        #region Constantes

        private const string STR_METODO_ARQUIVO_DOWNLOAD = "STR_METODO_ARQUIVO_DOWNLOAD";
        private const string STR_METODO_ARQUIVO_DOWNLOAD_PARTE = "STR_METODO_ARQUIVO_DOWNLOAD_PARTE";
        private const string STR_METODO_PASTA_CONTEUDO = "STR_METODO_PASTA_CONTEUDO";
        private const string STR_METODO_PASTA_CONTEUDO_VAZIO = "STR_METODO_PASTA_CONTEUDO_VAZIO";

        #endregion Constantes

        #region Atributos

        private SrvWsDrive _srvWsDrive;

        private SrvWsDrive srvWsDrive
        {
            get
            {
                return _srvWsDrive;
            }

            set
            {
                _srvWsDrive = value;
            }
        }

        #endregion Atributos

        #region Construtores

        public ClienteWsDrive(TcpClient tcpClient, SrvWsDrive srvWsDrive) : base(tcpClient, srvWsDrive)
        {
            this.srvWsDrive = srvWsDrive;
        }

        #endregion Construtores

        #region Métodos

        protected override bool processarMensagem(Interlocutor objInterlocutor)
        {
            if (base.processarMensagem(objInterlocutor))
            {
                return true;
            }

            if (objInterlocutor == null)
            {
                return false;
            }

            switch (objInterlocutor.strMetodo)
            {
                case STR_METODO_ARQUIVO_DOWNLOAD:
                    this.download(objInterlocutor);
                    return true;

                case STR_METODO_PASTA_CONTEUDO:
                    this.abrirConteudo(objInterlocutor);
                    return true;
            }

            return false;
        }

        private void abrirConteudo(Interlocutor objInterlocutor)
        {
            ArquivoDominio arq = null;
            string dir = null;

            if (objInterlocutor.objData != null)
            {
                arq = objInterlocutor.getObjJson<ArquivoDominio>();

                if (arq == null)
                {
                    return;
                }

                dir = (ConfigDrive.i.dirRepositorio + arq.dir);
            }
            else
            {
                dir = ConfigDrive.i.dirRepositorio;
            }

            if (!Directory.Exists(dir))
            {
                return;
            }

            List<ArquivoDominio> lstArq = new List<ArquivoDominio>();

            this.listarPasta(lstArq, dir);

            if (lstArq.Count < 1)
            {
                this.enviar(new Interlocutor(STR_METODO_PASTA_CONTEUDO_VAZIO, arq?.dir));
                return;
            }

            this.enviar(new Interlocutor(STR_METODO_PASTA_CONTEUDO, lstArq));
        }

        private void download(Interlocutor objInterlocutor)
        {
            try
            {
                this.bloquearThread();

                var objTransferencia = objInterlocutor.getObjJson<TransferenciaDominio>();

                if (objTransferencia == null)
                {
                    return;
                }

                if (string.IsNullOrEmpty(objTransferencia.dirArquivo))
                {
                    return;
                }

                if (!File.Exists(ConfigDrive.i.dirRepositorio + objTransferencia.dirArquivo))
                {
                    return;
                }

                var arrBte = RepositorioCache.i.getArrByte(objTransferencia.dirArquivo, objTransferencia.intParte);

                if (arrBte == null)
                {
                    return;
                }

                objTransferencia.strData = Convert.ToBase64String(arrBte);

                this.enviar(STR_METODO_ARQUIVO_DOWNLOAD_PARTE, objTransferencia);
            }
            finally
            {
                this.liberarThread();
            }
        }

        private void listarPasta(List<ArquivoDominio> lstArq, string dir)
        {
            foreach (string dirPasta in Directory.GetDirectories(dir))
            {
                this.listarPasta(lstArq, dirPasta, true);
            }

            foreach (string dirArquivo in Directory.GetFiles(dir))
            {
                this.listarPasta(lstArq, dirArquivo, false);
            }
        }

        private void listarPasta(List<ArquivoDominio> lstArq, string dirPasta, bool booPasta)
        {
            var arqPasta = new ArquivoDominio();

            arqPasta.booPasta = booPasta;
            arqPasta.dir = dirPasta.Replace(ConfigDrive.i.dirRepositorio, null).Replace("\\", "/");
            arqPasta.dttAlteracao = Directory.GetLastWriteTime(dirPasta);
            arqPasta.dttCadastro = Directory.GetCreationTime(dirPasta);
            arqPasta.intTamanho = (!booPasta ? (new FileInfo(dirPasta).Length) : 0);
            arqPasta.strNome = Path.GetFileName(dirPasta);

            lstArq.Add(arqPasta);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}