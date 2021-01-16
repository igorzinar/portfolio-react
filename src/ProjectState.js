//Import Images

import breakout from './img/projects/Brekout.jpg'
import quiz from './img/projects/quiz.jpg'
import imageGallery from './img/projects/image-gallery.jpg'

export const ProjectState = () => {
  return [
    {
      title: 'Breakout Game',
      mainImg: breakout,
      secondaryImg: breakout,
      url: '/projects/breakout',
      awards: [
        {
          title: 'Try Play for fun 🕹️🕹️🕹️',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'I never will be boring 😊😊',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: "I YOU don't know the rules... ",
          description: "“It's ok you can read it by click the button ”",
        },
      ],
    },
    {
      title: 'Intellectual Game',
      mainImg: quiz,
      url: '/projects/quiz',
      secondaryImg: quiz,
      awards: [
        {
          title: 'Play with your friends and make more points 💯💯💯',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'If it easy you can change  and try more difficult 🔨🔨',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'You can also to choose category what do you prefer  🎦🎉🏀',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Image Gallery',
      mainImg: imageGallery,
      url: '/projects/gallery',
      secondaryImg: imageGallery,
      awards: [
        {
          title: 'Are YOU want some really nice photo 🖼️🖼️🖼️ ',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'You can search it easy... 🔎🔎🔎',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'And it for FREE...  🥳🥳🥳',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ]
}
