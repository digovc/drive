using System;
using Drive.Html.Pagina;
using NetZ.Web.Server;

namespace Drive.Server
{
    internal class SrvHttpDrive : SrvHttpBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private PagPrincipalDrive _pagPrincipalDrive;

        private PagPrincipalDrive pagPrincipalDrive
        {
            get
            {
                if (_pagPrincipalDrive != null)
                {
                    return _pagPrincipalDrive;
                }

                _pagPrincipalDrive = new PagPrincipalDrive();

                return _pagPrincipalDrive;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public override Resposta responder(Solicitacao objSolicitacao)
        {
            return base.responder(objSolicitacao) ?? this.responderLocal(objSolicitacao);
        }

        private Resposta responderLocal(Solicitacao objSolicitacao)
        {
            try
            {
                this.bloquearThread();

                return new Resposta(objSolicitacao).addHtml(this.pagPrincipalDrive);
            }
            finally
            {
                this.liberarThread();
            }
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}