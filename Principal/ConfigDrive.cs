using NetZ.Web;

namespace Drive
{
    internal class ConfigDrive : ConfigWebBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static ConfigDrive _i;

        private string _dirRepositorio;
        private int _intSrvWsDrivePorta = 8281;

        public new static ConfigDrive i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new ConfigDrive();

                return _i;
            }
        }

        public string dirRepositorio
        {
            get
            {
                return _dirRepositorio;
            }

            set
            {
                _dirRepositorio = value;
            }
        }

        public int intSrvWsDrivePorta
        {
            get
            {
                return _intSrvWsDrivePorta;
            }

            set
            {
                _intSrvWsDrivePorta = value;
            }
        }

        #endregion Atributos

        #region Construtores

        private ConfigDrive()
        {
        }

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}