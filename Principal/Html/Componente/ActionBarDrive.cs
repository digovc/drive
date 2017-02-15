using NetZ.Web.Html.Componente.Mobile;

namespace Drive.Html.Componente
{
    internal class ActionBarDrive : ActionBarBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}