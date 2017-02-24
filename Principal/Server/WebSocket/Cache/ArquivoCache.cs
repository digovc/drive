using DigoFramework;
using Drive.DataBase.Dominio;
using System.IO;

namespace Drive.Server.WebSocket.Cache
{
    internal class ArquivoCache : Objeto
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private ArquivoDominio _arq;
        private string _dir;
        private string _dirCompleto;
        private FileStream _objFileStream;

        public ArquivoDominio arq
        {
            get
            {
                return _arq;
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

        public FileStream objFileStream
        {
            get
            {
                if (_objFileStream != null)
                {
                    return _objFileStream;
                }

                _objFileStream = this.getObjFileStream();

                return _objFileStream;
            }
        }

        private string dirCompleto
        {
            get
            {
                if (_dirCompleto != null)
                {
                    return _dirCompleto;
                }

                _dirCompleto = this.getDirCompleto();

                return _dirCompleto;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        internal byte[] getArrByte(int intParte)
        {
            if (this.objFileStream == null)
            {
                return null;
            }

            if (this.objFileStream.Length < 1)
            {
                return null;
            }

            var intOffSet = (intParte * AppDrive.INT_TRANSFERENCIA_PARTE_TAMANHO);

            if (intOffSet > this.objFileStream.Length)
            {
                return null;
            }

            var intBufferSize = AppDrive.INT_TRANSFERENCIA_PARTE_TAMANHO;

            if ((this.objFileStream.Length - intOffSet) <= AppDrive.INT_TRANSFERENCIA_PARTE_TAMANHO)
            {
                intBufferSize = (this.objFileStream.Length - intOffSet);
            }

            var arrBteResultado = new byte[intBufferSize];

            this.objFileStream.Seek(intOffSet, SeekOrigin.Begin);

            this.objFileStream.Read(arrBteResultado, 0, (int)intBufferSize);

            return arrBteResultado;
        }

        private string getDirCompleto()
        {
            return (ConfigDrive.i.dirRepositorio + this.dir);
        }

        private FileStream getObjFileStream()
        {
            if (string.IsNullOrEmpty(this.dirCompleto))
            {
                return null;
            }

            if (!File.Exists(this.dirCompleto))
            {
                return null;
            }

            return new FileStream(this.dirCompleto, FileMode.Open);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}