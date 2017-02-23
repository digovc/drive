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

        private Div _divConteudo;
        private Div _divImagem;
        private Div _divMenu;
        private ArqDetalheMenuItem _divMenuApagar;
        private ArqDetalheMenuItem _divMenuBaixar;
        private ArqDetalheMenuItem _divMenuLink;
        private Div _divTitulo;

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

        private ArqDetalheMenuItem divMenuApagar
        {
            get
            {
                if (_divMenuApagar != null)
                {
                    return _divMenuApagar;
                }

                _divMenuApagar = new ArqDetalheMenuItem("http://www.iconsdb.com/icons/preview/green/trash-2-xxl.png");

                return _divMenuApagar;
            }
        }

        private ArqDetalheMenuItem divMenuBaixar
        {
            get
            {
                if (_divMenuBaixar != null)
                {
                    return _divMenuBaixar;
                }

                _divMenuBaixar = new ArqDetalheMenuItem("http://findicons.com/files/icons/1008/quiet/128/download.png");

                return _divMenuBaixar;
            }
        }

        private ArqDetalheMenuItem divMenuLink
        {
            get
            {
                if (_divMenuLink != null)
                {
                    return _divMenuLink;
                }

                _divMenuLink = new ArqDetalheMenuItem("http://www.iconsdb.com/icons/preview/green/link-2-xxl.png");

                return _divMenuLink;
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

        protected override void addJsDebug(LstTag<JavaScriptTag> lstJsDebug)
        {
            base.addJsDebug(lstJsDebug);

            lstJsDebug.Add(new JavaScriptTag(typeof(ArquivoDetalheBase), 200));
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = typeof(ArquivoDetalheBase).Name.Replace("Base", null);

            this.divMenuApagar.strTitle = "Apagar";
            this.divMenuBaixar.strTitle = "Baixar";
            this.divMenuLink.strTitle = "Link";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);

            this.divImagem.setPai(this.divConteudo);
            this.divTitulo.setPai(this.divConteudo);

            this.divMenu.setPai(this.divConteudo);

            this.divMenuBaixar.setPai(this.divMenu);
            this.divMenuLink.setPai(this.divMenu);
            this.divMenuApagar.setPai(this.divMenu);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("rgba(0,0,0,.75)"));
            this.addCss(css.setBottom(0));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setLeft(0));
            this.addCss(css.setPosition("absolute"));
            this.addCss(css.setRight(0));
            this.addCss(css.setTop(0));
            this.addCss(css.setZIndex(10));

            this.divConteudo.addCss(css.setBackgroundColor("white"));
            this.divConteudo.addCss(css.setBottom(0));
            this.divConteudo.addCss(css.setBoxShadow(0, 1, 5, 0, "#9e9e9e"));
            this.divConteudo.addCss(css.setLeft(0));
            this.divConteudo.addCss(css.setPosition("absolute"));
            this.divConteudo.addCss(css.setRight(0));

            this.divImagem.addCss(css.setBackgroundColor("#4CAF50"));
            this.divImagem.addCss(css.setHeight(175));

            this.divMenu.addCss(css.setBoxShadow(0, 0, 5, 0, "grey"));
            this.divMenu.addCss(css.setMargin(15));

            this.divTitulo.addCss(css.setColor("white"));
            this.divTitulo.addCss(css.setFontSize(25));
            this.divTitulo.addCss(css.setLineHeight(50));
            this.divTitulo.addCss(css.setMarginTop(-50));
            this.divTitulo.addCss(css.setOverflow("hidden"));
            this.divTitulo.addCss(css.setPaddingLeft(15));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divMenuApagar.strId = (strId + "_divMenuApagar");
            this.divMenuBaixar.strId = (strId + "_divMenuBaixar");
            this.divMenuLink.strId = (strId + "_divMenuLink");
            this.divTitulo.strId = (strId + "_divTitulo");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}