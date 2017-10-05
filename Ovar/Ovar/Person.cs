using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ovar
{
   public class Person
    {
        public string name;
        public string phone;

        public Person(string name, string phone)
        {
            Name = name;
            Phone = phone;

        }

        public string Name
        {
            get

            { return name; }

            set

            {
                if (name == "Sara")
                {
                    name = value;
                }

            }

        }

        public string Phone
        {
            get
            { return phone; }
            set
            { phone = value; }
        }
    }
}
