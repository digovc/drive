using DigoFramework;
using System.Collections.Generic;
using System;

namespace Drive.Server.WebSocket.Cache
{
    internal class RepositorioCache : Objeto
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static RepositorioCache _i;
        private List<ArquivoCache> _lstArqCache;

        public static RepositorioCache i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new RepositorioCache();

                return _i;
            }
        }

        private List<ArquivoCache> lstArqCache
        {
            get
            {
                if (_lstArqCache != null)
                {
                    return _lstArqCache;
                }

                _lstArqCache = new List<ArquivoCache>();

                return _lstArqCache;
            }
        }

        #endregion Atributos

        #region Construtores

        private RepositorioCache()
        {
        }

        #endregion Construtores

        #region Métodos

        internal byte[] getArrByte(string dir, int intParte)
        {
            var arq = this.getArq(dir);

            if (arq == null)
            {
                return null;
            }

            return arq.getArrByte(intParte);
        }

        private ArquivoCache getArq(string dir)
        {
            foreach (var arqCache in this.lstArqCache)
            {
                if (dir.ToLower().Equals(arqCache.dir.ToLower()))
                {
                    return arqCache;
                }
            }

            var arqCacheNovo = new ArquivoCache();

            arqCacheNovo.dir = dir;

            this.lstArqCache.Add(arqCacheNovo);

            this.limparCache();

            return arqCacheNovo;
        }

        private void limparCache()
        {
            // TODO: Limpar os arquivos mais antigos do cache.
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}