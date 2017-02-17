using NetZ.Web.Html;
using NetZ.Web.Html.Componente.Mobile;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente
{
    internal class ArquivoTile : TileBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divDttAlteracao;
        private Div _divIcone;
        private Div _divMenu;
        private Div _divTitulo;

        private Div divDttAlteracao
        {
            get
            {
                if (_divDttAlteracao != null)
                {
                    return _divDttAlteracao;
                }

                _divDttAlteracao = new Div();

                return _divDttAlteracao;
            }
        }

        private Div divIcone
        {
            get
            {
                if (_divIcone != null)
                {
                    return _divIcone;
                }

                _divIcone = new Div();

                return _divIcone;
            }
        }

        private Div divMenu
        {
            get
            {
                if (_divMenu != null)
                {
                    return _divMenu;
                }

                _divMenu = new Div();

                return _divMenu;
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

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divDttAlteracao.strConteudo = "_dtt_alteracao_conteudo";
            this.divDttAlteracao.strId = "_dtt_alteracao_id";

            this.divIcone.strId = "_icone_id";

            this.divTitulo.strConteudo = "_arquivo_titulo";
            this.divTitulo.strId = "_titulo_id";

            this.strId = "_tile_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divIcone.setPai(this);
            this.divTitulo.setPai(this);
            this.divDttAlteracao.setPai(this);
            this.divMenu.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBoxShadow(0, 1, 5, 0));
            this.addCss(css.setCursor("pointer"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setHeight(50));
            this.addCss(css.setMargin(10));
            this.addCss(css.setPosition("relative"));

            this.divDttAlteracao.addCss(css.setColor("grey"));
            this.divDttAlteracao.addCss(css.setFontSize(12));

            this.divIcone.addCss(css.setBackgroundImage("http://megaicons.net/static/img/icons_sizes/8/178/256/very-basic-file-icon.png"));
            this.divIcone.addCss(css.setBackgroundPosition("center"));
            this.divIcone.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divIcone.addCss(css.setBackgroundSize("30px 30px"));
            this.divIcone.addCss(css.setFloat("left"));
            this.divIcone.addCss(css.setHeight(100, "%"));
            this.divIcone.addCss(css.setMarginRight(10));
            this.divIcone.addCss(css.setWidth(50));

            this.divMenu.addCss(css.setBackgroundImage("https://cdn0.iconfinder.com/data/icons/pack-web-app-game/512/option-menu-256.png"));
            this.divMenu.addCss(css.setBackgroundPosition("center"));
            this.divMenu.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divMenu.addCss(css.setBackgroundSize("25px"));
            this.divMenu.addCss(css.setHeight(100, "%"));
            this.divMenu.addCss(css.setPosition("absolute"));
            this.divMenu.addCss(css.setRight(0));
            this.divMenu.addCss(css.setTop(0));
            this.divMenu.addCss(css.setWidth(35));

            this.divTitulo.addCss(css.setPaddingTop(5));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}