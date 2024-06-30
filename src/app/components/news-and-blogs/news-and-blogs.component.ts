import { Component } from '@angular/core';

interface RetreatFeature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-news-and-blogs',
  templateUrl: './news-and-blogs.component.html',
  styleUrl: './news-and-blogs.component.css'
})
export class NewsAndBlogsComponent {

  retreatFeatures: RetreatFeature[] = [
    {
      title: 'Retreats Tailored to You',
      description: 'Our retreats are designed to fit your needs, whether you\'re a yoga novice or expert. Find the perfect balance of activity and relaxation, and connect with like-minded individuals.'
    },
    {
      title: 'Diverse Yoga Practices',
      description: 'Experience a variety of yoga styles to enrich your practice. Our expert instructors guide you in finding the style that speaks to you, from calming Yin to dynamic Ashtanga.'
    },
    {
      title: 'Nature and Nurture',
      description: 'Connect with the calming power of nature. Our retreats are set in beautiful, peaceful locations that offer a perfect backdrop for mindfulness and growth.'
    }
  ];

}
