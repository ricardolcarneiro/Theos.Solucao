//---------------------------------------------------------------
// <copyright file="AppDbContext.cs" company="Theos">
//     Copyright (c) Theos. All rights reserved.
// </copyright>
// <author> Ricardo Carneiro</author>
//-----------------------------------------------------------------------

namespace Theos.API.DAL
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Theos.Models;


    /// <summary>
    /// Classe de context do aplicação
    /// </summary>
    public class AppDbContext : DbContext
    {
        /// <summary>
        /// Construtor com  AppDbContext 
        /// </summary>
        /// <param name="dbContextOptions">Paramentro opções do contexto</param>
        public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        /// <summary>
        /// Encapsulamento Db Set Livro
        /// </summary>
        public DbSet<Livro> Livros { get; set; }
    }
}
