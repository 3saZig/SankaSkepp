using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ovar
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person1 = new Person("Ana", "123");

            person1.name = "Aan";

            Console.WriteLine(person1.name);

        }
    }
}
