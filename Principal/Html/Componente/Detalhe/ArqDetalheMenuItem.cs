using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente.Detalhe
{
    internal class ArqDetalheMenuItem : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divImagem;
        private Div _divTitulo;
        private string _srcImagem;

        private Div divImagem
        {
            get
            {
                if (_divImagem != null)
                {
                    return _divImagem;
                }

                _divImagem = new Div();

                return _divImagem;
            }
        }

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

        private string srcImagem
        {
            get
            {
                return _srcImagem;
            }

            set
            {
                _srcImagem = value;
            }
        }

        #endregion Atributos

        #region Construtores

        internal ArqDetalheMenuItem(string srcImagem)
        {
            this.srcImagem = srcImagem;
        }

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divImagem.setPai(this);
            this.divTitulo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBorderBottom(1, "solid", "rgb(210,210,210)"));
            this.addCss(css.setHeight(50));

            this.divImagem.addCss(css.setBackgroundImage(this.srcImagem));
            this.divImagem.addCss(css.setBackgroundPosition("center"));
            this.divImagem.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divImagem.addCss(css.setBackgroundSize(35, 35));
            this.divImagem.addCss(css.setFloat("left"));
            this.divImagem.addCss(css.setHeight(100, "%"));
            this.divImagem.addCss(css.setWidth(50));

            this.divTitulo.addCss(css.setLineHeight(50));
        }

        protected override void setStrTitle(string strTitle)
        {
            base.setStrTitle(strTitle);

            this.divTitulo.strConteudo = strTitle;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}