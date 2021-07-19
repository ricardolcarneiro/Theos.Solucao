
//---------------------------------------------------------------
// <copyright file="LivrosService.cs" company="Theos">
//     Copyright (c) Theos. All rights reserved.
// </copyright>
// <author> Ricardo Carneiro</author>
//-----------------------------------------------------------------------

namespace Theos.BlazorApp.Data
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Theos.Componente.CrudDAO;
    using Theos.Models;

    /// <summary>
    /// Classe de serviço Livros
    /// </summary>
    public class LivrosService
    {

        public Task<List<Livro>> GetLivroAsync()
        {
            List<Livro> lstLivros = new CrudDAO<Livro>().Get("Livroes").ToList();

            return Task.FromResult(lstLivros);
        }
        public Task<Livro> GetByIdLivroAsync(int Id)
        {
            Livro objLivros = new CrudDAO<Livro>().GetById(Id, "Livroes");

            return Task.FromResult(objLivros);
        }
        public void PostLivroAsync(Theos.Models.Livro objLivro)
        {
            try
            {
                new CrudDAO<Livro>().Create(objLivro, "Livroes");
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void PutLivroAsync(Theos.Models.Livro objLivro, int Id)
        {
            try
            {
                new CrudDAO<Livro>().Update(Id, objLivro, "Livroes");
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void DeleteLivroAsync(Theos.Models.Livro objLivro, int Id)
        {
            try
            {
                new CrudDAO<Livro>().Delete(Id, "Livroes");
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
