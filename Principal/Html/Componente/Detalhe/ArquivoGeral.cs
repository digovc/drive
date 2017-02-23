using NetZ.Web.Html;

namespace Drive.Html.Componente.Detalhe
{
    internal class ArquivoGeral : ArquivoDetalheBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJsDebug(LstTag<JavaScriptTag> lstJsDebug)
        {
            base.addJsDebug(lstJsDebug);

            lstJsDebug.Add(new JavaScriptTag(typeof(ArquivoGeral), 201));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}