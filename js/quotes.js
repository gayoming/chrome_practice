const quotes = [
    { 
      quote: "The flower that blooms in adversity is the most rare and beautiful of all.", 
      author: "The Emperor (Mulan)", 
      korean: "역경 속에서 피어나는 꽃이 가장 희귀하고 아름다운 꽃이다." 
    },
    { 
      quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.", 
      author: "Rafiki (The Lion King)", 
      korean: "그래, 과거는 아플 수 있지. 하지만 도망칠 수도 있고, 배울 수도 있어." 
    },
    { 
      quote: "The very things that hold you down are going to lift you up.", 
      author: "Timothy Q. Mouse (Dumbo)", 
      korean: "너를 짓누르는 바로 그것들이 너를 들어 올릴 거야." 
    },
    { 
      quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", 
      author: "Christopher Robin (Winnie the Pooh)", 
      korean: "넌 네가 믿는 것보다 더 용감하고, 네가 보이는 것보다 더 강하며, 네가 생각하는 것보다 더 똑똑해." 
    },
    { 
      quote: "Venture outside your comfort zone. The rewards are worth it.", 
      author: "Rapunzel (Tangled)", 
      korean: "편안한 영역에서 벗어나 봐. 그 보상은 충분히 가치가 있을 거야." 
    },
    { 
      quote: "Sometimes the right path is not the easiest one.", 
      author: "Grandmother Willow (Pocahontas)", 
      korean: "가끔 올바른 길은 가장 쉬운 길이 아니야." 
    },
    { 
      quote: "The only way to get what you want in this world is through hard work.", 
      author: "Tiana (The Princess and the Frog)", 
      korean: "이 세상에서 원하는 것을 얻는 유일한 방법은 열심히 일하는 것이야." 
    },
    { 
      quote: "If you focus on what you left behind, you will never be able to see what lies ahead.", 
      author: "Gusteau (Ratatouille)", 
      korean: "뒤에 남겨둔 것에 집중하면, 앞에 있는 것을 결코 볼 수 없을 거야." 
    },
    { 
      quote: "Remember, you’re the one who can fill the world with sunshine.", 
      author: "Snow White (Snow White and the Seven Dwarfs)", 
      korean: "기억해, 세상에 햇살을 가득 채울 수 있는 사람은 바로 너야." 
    },
    { 
      quote: "Life’s not a spectator sport. If watching is all you’re going to do, then you’re going to watch your life go by without you.", 
      author: "Laverne (The Hunchback of Notre Dame)", 
      korean: "인생은 구경꾼의 스포츠가 아니야. 구경만 할 거라면, 네 인생이 너 없이 흘러가는 걸 보게 될 거야." 
    }
  ];

  const quote = document.querySelector("#quote .quote");
  const author = document.querySelector("#quote .author");
  const korean = document.querySelector("#quote .korean");

  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Math.round() = 숫자 반올림, Math.celi() = 그냥 올림(1.1=2) Math.floor() = 그냥 내림 (1.9 = 1)

  quote.innerText = todayQuote.quote;
  author.innerText = todayQuote.author;
  korean.innerText = todayQuote.korean;

  