using Drive.Html.Componente;
using Drive.Server.WebSocket;
using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;

namespace Drive.Html.Pagina
{
    internal class PagPrincipalDrive : PagMobile
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private ActionBarDrive _divActionBarDrive;
        private MenuDrive _divMenuDrive;

        private ActionBarDrive divActionBarDrive
        {
            get
            {
                if (_divActionBarDrive != null)
                {
                    return _divActionBarDrive;
                }

                _divActionBarDrive = new ActionBarDrive();

                return _divActionBarDrive;
            }
        }

        private MenuDrive divMenuDrive
        {
            get
            {
                if (_divMenuDrive != null)
                {
                    return _divMenuDrive;
                }

                _divMenuDrive = new MenuDrive();

                return _divMenuDrive;
            }
        }

        #endregion Atributos

        #region Construtores

        public PagPrincipalDrive() : base("Drive")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addConstante(JavaScriptTag tagJs)
        {
            base.addConstante(tagJs);

            SrvWsDrive.i.addConstante(tagJs);
        }

        protected override void addJsDebug(LstTag<JavaScriptTag> lstJsDebug)
        {
            base.addJsDebug(lstJsDebug);

            lstJsDebug.Add(new JavaScriptTag(typeof(AppDrive)));
            lstJsDebug.Add(new JavaScriptTag(typeof(SrvWsDrive)));
        }

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divActionBarDrive.setPai(this);
            this.divMenuDrive.setPai(this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}