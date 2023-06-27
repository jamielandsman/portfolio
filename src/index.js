function getSingleResponse() {
  axios
    .post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: "Tell me a joke.",
        max_tokens: 50,
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const joke = response.data.choices[0].text.trim();
      console.log(joke);
    })
    .catch((err) => console.log(err));
}

getSingleResponse();
