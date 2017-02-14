using NetZ.Web;

namespace Drive
{
    internal class ConfigDrive : ConfigWebBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static ConfigDrive _i;

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