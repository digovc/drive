using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente
{
    internal class BarraEnderecoItem : ComponenteHtml
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

            this.strId = "_barra_item_id";
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorderRight(1, "solid", "#4a545a"));
            this.addCss(css.setCursor("pointer"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setFloat("left"));
            this.addCss(css.setPadding(10));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}