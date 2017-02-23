using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente.Detalhe
{
    internal abstract class ArquivoDetalheBase : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divTitulo;

        private Div divTitulo
        {
            get
            {
                if (_divTitulo != null)
                {
                    return _divTitulo;
                }

                _divTitulo = new Div();

                return _divTitulo;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJsDebug(LstTag<JavaScriptTag> lstJsDebug)
        {
            base.addJsDebug(lstJsDebug);

            lstJsDebug.Add(new JavaScriptTag(typeof(ArquivoDetalheBase), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = typeof(ArquivoDetalheBase).Name.Replace("Base", null);
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divTitulo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("white"));
            this.addCss(css.setBottom(0));
            this.addCss(css.setBoxShadow(0, 1, 5, 0, "#9e9e9e"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setLeft(15));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setRight(15));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divTitulo.strId = (strId + "_divTitulo");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}