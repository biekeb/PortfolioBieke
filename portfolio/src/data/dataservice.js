import topicsData from "./projects.json";

export async function getTopics() {
  return Promise.resolve(topicsData.topics);
}

export async function getTopic(id) {
  const topics = await getTopics();
  return Promise.resolve(topics.find((topic) => topic.id === Number(id)));
}
