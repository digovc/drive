using NetZ.Web.Html;
using NetZ.Web.Server;
using NetZ.Web.Server.WebSocket;
using System.Net.Sockets;

namespace Drive.Server.WebSocket
{
    internal class SrvWsDrive : SrvWsBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static SrvWsDrive _i;

        public static SrvWsDrive i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new SrvWsDrive();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private SrvWsDrive() : base("Server WebSocket Drive")
        {
        }

        #endregion Construtores

        #region Métodos

        internal void addConstante(JavaScriptTag tagJs)
        {
            tagJs.addConstante((this.GetType().Name + "_intPorta"), this.intPorta);
            tagJs.addConstante((this.GetType().Name + "_strNome"), this.strNome);
        }

        protected override int getIntPorta()
        {
            return ConfigDrive.i.intSrvWsDrivePorta;
        }

        protected override Cliente getObjCliente(TcpClient tcpClient)
        {
            return new ClienteWsDrive(tcpClient, this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}