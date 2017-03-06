using NetZ.Web.Html;

namespace Drive.Html.Componente.Detalhe
{
    internal class ArqDetalheGeral : ArquivoDetalheBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(ArqDetalheGeral), 201));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}