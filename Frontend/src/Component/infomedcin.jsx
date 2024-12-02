import React from 'react';
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc9.png";
import doc4 from "../assets/doc11.png";
import doc5 from "../assets/doc12.png";
import doc6 from "../assets/doc13.png";
import doc7 from "../assets/doc14.png";
import doc8 from "../assets/doc15.png";
import doc10 from "../assets/12.avif"
import doc11 from "../assets/13.avif"
import doc12 from "../assets/14.avif"
import doc13 from "../assets/10avif.avif"

export const doctors = [
  {
    id: 1,
    name: 'Dr. Mohmed Amine',
    specialization: 'Cardiologue',
    info: 'Diplômé en cardiologie interventionnelle: Université Paris Descartes, France. Ancien médecin du centre de cardiologie interventionnelle Louis Pasteur, Nancy, France.',
    telephone: '+212 524 20 10 07',
    location: 'https://www.google.com/maps/embed?pb=...',
    image: doc1,
  },
  {
    id: 2,
    name: 'Dr. Hind Nadim',
    specialization: 'Dentiste',
    info: 'Diplômé en cardiologie interventionnelle : Université Paris Descartes france Diplômé de la faculté de médecine Marrakech Ancien médecin du centre de cardiologie interventionnelle Louis pasteur Nancy  France Ancien Médecin du CHU Amien Sud - France Ancien Interne du CHU marrakech et l’Hopital militaire Avicenne -Marrakech...',
        telephone: '+212 524 20 10 07' ,
        localisation:'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d27174.295074862745!2d-7.999795000000001!3d31.639685!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM4JzIyLjkiTiA3wrA1OSc1OS4zIlc!5e0!3m2!1sen!2sma!4v1732898096605!5m2!1sen!2sma',
    image: doc2,
  },
  {
    id: 3,
    name: 'Dr. Ahmed El Ouafi',
    specialization: 'Dermatologue',
    info:'Spécialiste en ophtalmologie Diplômée de la faculté de médecine de Marrakech Diplôme de cornée Strasbourg Diplôme d’adaptation en lentilles de contact Paris Diplôme de chirurgie réfractive UAE',
    telephone:'+212 524 43 18 01',
    localisation:'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d13586.659661081569!2d-7.996169083127266!3d31.643023801265493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d31.6506112!2d-8.0084992!4m3!3m2!1d31.633930399999997!2d-8.0023851!5e0!3m2!1sar!2sma!4v1732917239814!5m2!1sar!2sma',
    image: doc3,
  },
  {
    id: 4,
    name: 'Dr. Rachid Benjelloun',
    specialization: 'Médecin généraliste',
   



    info:'Diplôme d’université D’immun allergologie chimique et professionnelle - Paris FRANCE Diplôme Universitaire de spécialité Pneumologie - Reims FRANCE Diplôme Universitaire de spécialité Allergologie et immunologie Cliniques - Reims FRANCE Formation Pathologie respiratoire du Sommeil...',
    telephone:'+212 524 43 23 20 ',
    localisation:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45010.46544836627!2d-7.613773000000001!3d33.58325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2bdc8adc98b%3A0xa83d84e240f5a362!2sEDICOM%20S.A!5e1!3m2!1sfr!2sma!4v1732918005154!5m2!1sfr!2sma',
    image: doc4,
  },
  {
    id: 5,
    name: 'Dr. Sofia Zahraoui',
    specialization: 'Pédiatre',
    info:'Dr Halim Saidi est un médecin orthopédiste et traumatologue basé à Marrakech, Maroc. Il exerce à l’Hôpital Ibn Tofail où il prend en charge diverses pathologies liées à l’appareil locomoteur. Ses spécialités incluent l’orthopédie pédiatrique, la chirurgie de la colonne vertébrale, la chirurgie du sport, le traitement des hernies discales, les prothèses articulaires (hanche, coude, épaule)..',
    telephone:'+212673083940',
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.1690328913014!2d-8.011276474894567!3d31.630488074163807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeff93bb6d00d%3A0xeb3c1c1f4c2bcb0e!2sDocteur%20Halim%20Saidi%20Cabinet%20de%20Chirurgie%20Orthop%C3%A9dique%20et%20Traumatologie%20Marrakech!5e1!3m2!1sar!2sma!4v1732924009332!5m2!1sar!2sma',
    image: doc5,
  },
  {
    id: 6,
    name: 'Dr. Mohammed Boussaid',
    specialization: 'Endocrinologue',
   



    image: doc6,
  },
  {
    id: 7,
    name: 'Dr. Nadia Lahlou',
    specialization: 'Gynécologue',
   


    image: doc7,
  },
  {
    id: 8,
    name: 'Dr. El Jazouli Intissar',
    specialization: 'Ophtalmologue',
    





    image: doc10,
  },
  {
    id: 9,
    name: 'Dr. Samira Laaroussi',
    specialization: 'Neurologue',
   



    image: doc11,
  },
  {
    id: 10,
    name: 'Dr. Khalid El Amrani',
    specialization: 'Urologue',
    




    image: doc10,
  },
  {
    id: 11,
    name: 'Dr. Yasmina Didi',
    specialization: 'Oncologue',
    




    image: doc11,
  },
  {
    id: 12,
    name: 'Dr. Nabil Hamid',
    specialization: 'Rhumatologue',
  



    image: doc12,
  },
  {
    id: 13,
    name: 'Dr. Imane Belkacem',
    specialization: 'Psychiatre',
    



    
    image: doc13,
  }
];