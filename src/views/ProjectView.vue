<template>
    <div class="riddle-container">
      <div class="game-info">
        <p>Player, you have 20 riddles to answer. For each riddle, you have 3 attempts.</p>
      </div>
      <h2 class="riddle-question" v-if="riddles.length && currentIndex < riddles.length">{{ riddle.question }}</h2>
      <p v-if="!showAnswer && riddles.length && currentIndex < riddles.length" class="riddle-instructions">Can you solve this riddle?</p>
      <p v-else-if="showAnswer && riddles.length && currentIndex < riddles.length" class="riddle-answer">Answer: {{ riddle.answer }}</p>
      <div v-if="!showAnswer && riddles.length && currentIndex < riddles.length">
        <input v-model="userAnswer" type="text" placeholder="Your answer" class="answer-input" />
        <button @click="submitAnswer" class="submit-answer-btn">Submit Answer</button>
      </div>
      <button v-else-if="showAnswer && currentIndex < riddles.length" @click="nextRiddle" class="next-riddle-btn">Next Riddle</button>
      <button @click="toggleAnswer" class="toggle-answer-btn" v-if="showAnswer || currentIndex === riddles.length - 1">Show Answer</button>
      <button @click="checkScore" class="check-score-btn" v-if="currentIndex === riddles.length - 1">Check Score</button>
      <p v-if="showScore" class="user-score">Your Score: {{ score }} / {{ riddles.length }}</p>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        showAnswer: false,
        showScore: false,
        currentIndex: 0,
        score: 0,
        userAnswer: '',
        attempts: 0, // Track the number of attempts
        maxAttempts: 3, // Maximum number of attempts allowed
        riddles: [
        { id: 1, question: 'What has keys but can\'t open locks?', answer: 'A piano' },
        { id: 2, question: 'What comes once in a minute, twice in a moment, but never in a thousand years?', answer: 'The letter M' },
        { id: 3, question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps' },
        { id: 4, question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?', answer: 'A map' },
        // Add more riddles if needed
        { id: 5, question: 'What has a heart that doesn’t beat?', answer: 'An artichoke' },
        { id: 6, question: 'What has a neck but no head?', answer: 'A bottle' },
        { id: 7, question: 'What has one eye but can’t see?', answer: 'A needle' },
        { id: 8, question: 'What has many keys but can’t open a single lock?', answer: 'A computer keyboard' },
        { id: 9, question: 'What begins and has no end?', answer: 'A circle' },
        { id: 10, question: 'What has a face and two hands but no arms or legs?', answer: 'A clock' },
        { id: 11, question: 'What has a mouth but never eats?', answer: 'A river' },
        { id: 12, question: 'What has a head, a tail, is brown, and has no legs?', answer: 'A penny' },
        { id: 13, question: 'What has a golden heart but no life?', answer: 'An artichoke' },
        { id: 14, question: 'What can travel around the world while staying in a corner?', answer: 'A stamp' },
        { id: 15, question: 'What has an endless supply of letters but starts empty?', answer: 'A mailbox' },
        { id: 16, question: 'What has a thumb and four fingers but is not a hand?', answer: 'A glove' },
        { id: 17, question: 'What has keys but can’t open locks?', answer: 'A piano' },
        { id: 18, question: 'What has an infinite number of sides but only one angle?', answer: 'A circle' },
        { id: 19, question: 'What has an endless supply of letters but starts empty?', answer: 'A mailbox' },
        { id: 20, question: 'What has a heart that doesn’t beat?', answer: 'An artichoke' },
        ],
      };
    },
    computed: {
    riddle() {
      return this.riddles[this.currentIndex] || {};
    },
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    submitAnswer() {
      if (this.userAnswer.toLowerCase() === this.riddle.answer.toLowerCase()) {
        alert('Correct! Proceed to the next riddle.');
        this.score++;
        this.nextRiddle();
      } else {
        this.attempts++;
        if (this.attempts >= this.maxAttempts) {
          alert(`Sorry, the correct answer is: ${this.riddle.answer}. Let's move to the next riddle.`);
          this.nextRiddle();
        } else {
          alert(`Incorrect. You have ${this.maxAttempts - this.attempts} attempts remaining. Try again!`);
        }
      }
    },
    nextRiddle() {
      this.showAnswer = false;
      this.userAnswer = ''; // Clear the user's answer for the next riddle
      this.attempts = 0; // Reset attempts for the next riddle
      this.currentIndex++;
    },
    checkScore() {
      this.showScore = true;
    },
  },
};
  </script>

<style scoped>
  .riddle-container {
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f8f8f8;
    max-width: 400px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .riddle-question {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #d22929;
  }

  .riddle-instructions {
    color: #555;
    margin-bottom: 10px;
  }

  .riddle-answer {
    color: #28a745; /* Green color for the answer */
    font-weight: bold;
    margin-top: 10px;
  }

  .answer-input {
    padding: 10px;
    margin-top: 10px;
    width: 60%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  .submit-answer-btn {
    padding: 10px 20px;
    background-color: #007bff; /* Blue color for the button */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }

  .submit-answer-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  .next-riddle-btn,
  .toggle-answer-btn,
  .check-score-btn {
    padding: 10px 20px;
    background-color: #28a745; /* Green color for the buttons */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }

  .next-riddle-btn:hover,
  .toggle-answer-btn:hover,
  .check-score-btn:hover {
    background-color: #218838; /* Darker green on hover */
  }

  .user-score {
    font-size: 1.2rem;
    color: #333;
    margin-top: 20px;
  }
</style>



