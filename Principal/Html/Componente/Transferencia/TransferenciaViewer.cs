using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente.Transferencia
{
    internal class TransferenciaViewer : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divImagem;
        private Div _divProgresso;

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

        private Div divProgresso
        {
            get
            {
                if (_divProgresso != null)
                {
                    return _divProgresso;
                }

                _divProgresso = new Div();

                return _divProgresso;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooJs()
        {
            return base.getBooJs();
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divImagem.setPai(this);
            this.divProgresso.setPai(this);

            this.divConteudo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackground("white"));
            this.addCss(css.setBottom(0));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setLeft(0));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setRight(0));
            this.addCss(css.setTop(50));

            this.divConteudo.addCss(css.setBoxShadow(0, 0, 5, 0, "grey"));
            this.divConteudo.addCss(css.setMargin(15));

            this.divImagem.addCss(css.setBackgroundImage("https://s-media-cache-ak0.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif"));
            this.divImagem.addCss(css.setBackgroundPosition("center"));
            this.divImagem.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divImagem.addCss(css.setBackgroundSize("200px"));
            this.divImagem.addCss(css.setBorderRadius(50, "%"));
            this.divImagem.addCss(css.setHeight(200));
            this.divImagem.addCss(css.setMargin("auto"));
            this.divImagem.addCss(css.setMarginBottom(15));
            this.divImagem.addCss(css.setMarginTop(15));
            this.divImagem.addCss(css.setWidth(200));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divConteudo.strId = (strId + "_divConteudo");
            this.divImagem.strId = (strId + "_divImagem");
            this.divProgresso.strId = (strId + "_divProgresso");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}