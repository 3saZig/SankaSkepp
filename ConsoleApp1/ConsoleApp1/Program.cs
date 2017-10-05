using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person1 = new Person("Ana", "1234");
            Person person2 = new Person("Ann", "234");
            Person person3 = new Person("Ani", "34");

            List<Person> contacts = new List<Person>();

            contacts[0] = person1;
            contacts[1] = person2;
            contacts[2] = person3;


            foreach (string i in contacts)
            {
                Console.WriteLine(i);
            }

        }
    }

    class Person
    {

        string name;
        string phone;

        public Person(string name, string phone)
        {
            this.name = name;
            this.phone = phone;
        }
    }

    class Contacts
    {


    }
}
