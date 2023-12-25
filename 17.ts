type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type GameScenarios = {
  "👊🏻👊🏻": "draw";
  "✌🏽✌🏽": "draw";
  "🖐🏾🖐🏾": "draw";
  "👊🏻✌🏽": "lose";
  "✌🏽🖐🏾": "lose";
  "🖐🏾👊🏻": "lose";
  "👊🏻🖐🏾": "win";
  "✌🏽👊🏻": "win";
  "🖐🏾✌🏽": "win";
};

type WhoWins<
  P1 extends RockPaperScissors,
  P2 extends RockPaperScissors
> = GameScenarios[`${P1}${P2}`];
