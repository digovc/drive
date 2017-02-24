using Drive.DataBase.Dominio;
using Drive.Html.Componente;
using Drive.Html.Componente.Transferencia;
using Drive.Server.WebSocket;
using NetZ.Web.DataBase.Dominio;
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
        private ArquivoViewer _divArquivoViewer;
        private BarraEndereco _divBarraEndereco;
        private MenuDrive _divMenuDrive;
        private TransferenciaViewer _divTransferenciaViewer;

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

        private ArquivoViewer divArquivoViewer
        {
            get
            {
                if (_divArquivoViewer != null)
                {
                    return _divArquivoViewer;
                }

                _divArquivoViewer = new ArquivoViewer();

                return _divArquivoViewer;
            }
        }

        private BarraEndereco divBarraEndereco
        {
            get
            {
                if (_divBarraEndereco != null)
                {
                    return _divBarraEndereco;
                }

                _divBarraEndereco = new BarraEndereco();

                return _divBarraEndereco;
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

        private TransferenciaViewer divTransferenciaViewer
        {
            get
            {
                if (_divTransferenciaViewer != null)
                {
                    return _divTransferenciaViewer;
                }

                _divTransferenciaViewer = new TransferenciaViewer();

                return _divTransferenciaViewer;
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
            lstJsDebug.Add(new JavaScriptTag(typeof(ArquivoDominio), 202));
            lstJsDebug.Add(new JavaScriptTag(typeof(DominioDriveBase), 201));
            lstJsDebug.Add(new JavaScriptTag(typeof(DominioWebBase), 200));
            lstJsDebug.Add(new JavaScriptTag(typeof(SrvWsDrive)));
            lstJsDebug.Add(new JavaScriptTag(typeof(TransferenciaDominio), 202));
        }

        protected override void addLayoutFixo(JavaScriptTag tagJs)
        {
            base.addLayoutFixo(tagJs);

            tagJs.addLayoutFixo(typeof(ArquivoTile));
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

            this.divBarraEndereco.setPai(this);
            this.divArquivoViewer.setPai(this);
            this.divTransferenciaViewer.setPai(this);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}