using DigoFramework;
using Drive.Server;
using Drive.Server.WebSocket;
using NetZ.Web;
using NetZ.Web.Server;
using System.Collections.Generic;
using System.IO;

namespace Drive
{
    internal class AppDrive : AppWebBase
    {
        #region Constantes

        public const long INT_TRANSFERENCIA_PARTE_TAMANHO = 1000000;

        #endregion Constantes

        #region Atributos

        private static AppDrive _i;

        public new static AppDrive i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new AppDrive();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private AppDrive() : base("Drive")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override ConfigWebBase getObjConfig()
        {
            return ConfigDrive.i;
        }

        protected override TemaBase getObjTema()
        {
            return new TemaDrive();
        }

        protected override void inicializar()
        {
            base.inicializar();

            if (string.IsNullOrEmpty(ConfigDrive.i.dirRepositorio))
            {
                new Erro("O repositório de arquivos não foi indicado.");
            }
            else
            {
                Directory.CreateDirectory(ConfigDrive.i.dirRepositorio);
            }
        }

        protected override void inicializarLstSrv(List<ServerBase> lstSrv)
        {
            lstSrv.Add(new SrvHttpDrive());

            lstSrv.Add(SrvWsDrive.i);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}