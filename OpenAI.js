/*
  *Kode By ArdianTdR
  *Kalo Mau Recode
  *Minimal Credit Lah
  *Instagram: Ardian93
  *YouTube: ArdianTdR Official
*/

const { Configuration, OpenAIApi } = require("openai");

//setup buat konfig nya
const key = require("./key.json");
const configApi = new Configuration({
 apiKey: key.keyopenai,
});
const openai = new OpenAIApi(configApi);

//function nya masbro
const ai = async (text) => {
 try {
  //mencoba ngambil respon
  const responAi = await openai.createChatCompletion({
   model: "gpt-3.5-turbo",
   messages: [{ content: text, role: "user" }],
   temperature: 0.5,
  });
  //mengeluarkan respon
  return await responAi["data"]["choices"][0]["message"]["content"];
 } catch (error) {
  //kalau error
  console.log("ERROR WOY : %s", error);
  return false;
 }
};

module.exports = ai;
