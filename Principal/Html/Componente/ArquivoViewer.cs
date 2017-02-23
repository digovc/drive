using Drive.Html.Componente.Detalhe;
using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente
{
    internal class ArquivoViewer : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divVazio;

        private Div divConteudo
        {
            get
            {
                if (_divConteudo != null)
                {
                    return _divConteudo;
                }

                _divConteudo = new Div();

                return _divConteudo;
            }
        }

        private Div divVazio
        {
            get
            {
                if (_divVazio != null)
                {
                    return _divVazio;
                }

                _divVazio = new Div();

                return _divVazio;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addLayoutFixo(JavaScriptTag tagJs)
        {
            base.addLayoutFixo(tagJs);

            tagJs.addLayoutFixo(typeof(ArqDetalheGeral));
            tagJs.addLayoutFixo(typeof(ArquivoTile));
        }

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;

            this.divVazio.strConteudo = "Nada por aqui Jhoe.";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divVazio.setPai(this);
            this.divConteudo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setPaddingTop(90));

            this.divVazio.addCss(css.setBackgroundImage("http://s11.postimg.org/j43gatslb/ghost.png"));
            this.divVazio.addCss(css.setBackgroundPosition("center 0px"));
            this.divVazio.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divVazio.addCss(css.setBackgroundSize("100px"));
            this.divVazio.addCss(css.setDisplay("none"));
            this.divVazio.addCss(css.setHeight(200));
            this.divVazio.addCss(css.setLineHeight(250));
            this.divVazio.addCss(css.setMarginTop(100));
            this.divVazio.addCss(css.setTextAlign("center"));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divConteudo.strId = (strId + "_divConteudo");
            this.divVazio.strId = (strId + "_divVazio");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}