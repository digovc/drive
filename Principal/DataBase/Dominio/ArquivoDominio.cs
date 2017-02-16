namespace Drive.DataBase.Dominio
{
    internal class ArquivoDominio : DominioDriveBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private bool _booPasta;
        private string _dir;

        public bool booPasta
        {
            get
            {
                return _booPasta;
            }

            set
            {
                _booPasta = value;
            }
        }

        public string dir
        {
            get
            {
                return _dir;
            }

            set
            {
                _dir = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}