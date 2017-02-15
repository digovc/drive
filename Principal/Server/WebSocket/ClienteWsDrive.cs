using NetZ.Web.Server.WebSocket;
using System.Net.Sockets;

namespace Drive.Server.WebSocket
{
    internal class ClienteWsDrive : ClienteWs
    {
        #region Constantes

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

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}