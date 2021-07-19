//---------------------------------------------------------------
// <copyright file="Livro.cs" company="Theos">
//     Copyright (c) Theos. All rights reserved.
// </copyright>
// <author> Ricardo Carneiro</author>
//-----------------------------------------------------------------------
namespace Theos.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;


    /// <summary>
    /// Classe da entidade Livro - Value Object
    /// </summary>
    public class Livro
    {
        /// <summary>
        /// Idendificador id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Nome do livro 
        /// </summary>
        public string Nome { get; set; }

        /// <summary>
        /// Valor do livro
        /// </summary>
        public double Valor { get; set; }

        /// <summary>
        /// Descricao do livro
        /// </summary>
        public string Descricao { get; set; }


        /// <summary>
        /// Data do livro
        /// </summary>
        public DateTime Data { get; set; }
    }
}
