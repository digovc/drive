using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente.Transferencia
{
    internal class TransferenciaItem : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divImagem;
        private Div _divProgresso;
        private Div _divTitulo;

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

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "_transferencia_item_id";

            this.divImagem.strId = "_imagem_id";
            this.divProgresso.strId = "_progresso_id";
            this.divTitulo.strId = "_titulo_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divImagem.setPai(this);
            this.divTitulo.setPai(this);
            this.divProgresso.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(53));
            this.addCss(css.setPosition("relative"));

            this.divImagem.addCss(css.setBackgroundImage("http://megaicons.net/static/img/icons_sizes/8/178/256/very-basic-file-icon.png"));
            this.divImagem.addCss(css.setBackgroundPosition("center"));
            this.divImagem.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divImagem.addCss(css.setBackgroundSize(35, 35));
            this.divImagem.addCss(css.setFloat("left"));
            this.divImagem.addCss(css.setHeight(100, "%"));
            this.divImagem.addCss(css.setWidth(50));

            this.divProgresso.addCss(css.setBackgroundColor("#2196F3"));
            this.divProgresso.addCss(css.setHeight(3));
            this.divProgresso.addCss(css.setPosition("absolute"));
            this.divProgresso.addCss(css.setWidth(0, "%"));

            this.divTitulo.addCss(css.setLineHeight(50));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}