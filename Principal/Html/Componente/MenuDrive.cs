using NetZ.Web.Html.Componente.Mobile;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente
{
    internal class MenuDrive : MenuMobileBase
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

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setZIndex(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}