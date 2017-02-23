using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Drive.Html.Componente
{
    internal class BarraEndereco : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divConteudo;
        private Div _divHome;

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

        private Div divHome
        {
            get
            {
                if (_divHome != null)
                {
                    return _divHome;
                }

                _divHome = new Div();

                return _divHome;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addLayoutFixo(JavaScriptTag tagJs)
        {
            base.addLayoutFixo(tagJs);

            tagJs.addLayoutFixo(typeof(BarraEnderecoItem));
        }

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;

            this.divHome.strConteudo = "Home";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divConteudo.setPai(this);

            this.divHome.setPai(this.divConteudo);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundColor("#607D8B"));
            this.addCss(css.setColor("white"));
            this.addCss(css.setHeight(40));
            this.addCss(css.setMarginTop(50));
            this.addCss(css.setOverflowY("auto"));

            css.addCssPuro("#_id::-webkit-scrollbar{height:0px;width:0px}".Replace("_id", this.strId));

            this.divHome.addCss(css.setBorderRight(1, "solid", "#4a545a"));
            this.divHome.addCss(css.setCursor("pointer"));
            this.divHome.addCss(css.setFloat("left"));
            this.divHome.addCss(css.setPadding(10));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divConteudo.strId = (strId + "_divConteudo");

            this.divHome.strId = (strId + "_divHome");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}