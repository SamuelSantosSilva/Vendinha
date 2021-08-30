  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TemplateApi.Models
{
    public class Divida
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
        public bool Pago { get; set; }
    }
}