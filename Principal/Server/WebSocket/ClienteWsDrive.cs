using DigoFramework;
using Drive.DataBase.Dominio;
using NetZ.Web.Server;
using NetZ.Web.Server.WebSocket;
using System.Collections.Generic;
using System.IO;
using System.Net.Sockets;

namespace Drive.Server.WebSocket
{
    internal class ClienteWsDrive : ClienteWs
    {
        #region Constantes

        private const string STR_METODO_PASTA_CONTEUDO = "STR_METODO_PASTA_CONTEUDO";
        private const string STR_METODO_PASTA_LISTAR = "STR_METODO_PASTA_LISTAR";

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
                case STR_METODO_PASTA_LISTAR:
                    this.listarPasta(objInterlocutor);
                    return true;
            }

            return false;
        }

        private void listarPasta(Interlocutor objInterlocutor)
        {
            string dir = string.Empty;

            if (objInterlocutor.objData != null)
            {
                dir = Path.Combine(ConfigDrive.i.dirRepositorio, objInterlocutor.objData.ToString());
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
                return;
            }

            this.enviar(new Interlocutor(STR_METODO_PASTA_CONTEUDO, lstArq));
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
            arqPasta.dir = dirPasta.Replace(ConfigDrive.i.dirRepositorio, null);
            arqPasta.dttAlteracao = Directory.GetLastWriteTime(dirPasta);
            arqPasta.dttCadastro = Directory.GetCreationTime(dirPasta);
            arqPasta.strNome = Path.GetFileName(dirPasta);

            lstArq.Add(arqPasta);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}