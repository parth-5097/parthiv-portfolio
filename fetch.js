const fs = require("fs");
const axios = require("axios");
const { parse } = require('rss-to-json');
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

async function fetchGitHubData() {
  if (USE_GITHUB_DATA === "true" && GITHUB_USERNAME !== undefined) {
    try {
      console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
      const response = await axios.post(
        "https://api.github.com/graphql",
        {
          query: `
          {
            user(login:"${GITHUB_USERNAME}") { 
              name
              bio
              avatarUrl
              location
              pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
          `
        },
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "User-Agent": "Node"
          }
        }
      );

      fs.writeFile(
        "./public/profile.json",
        JSON.stringify(response.data),
        function (err) {
          if (err) return console.log(err);
          console.log("saved file to public/profile.json");
        }
      );
    } catch (error) {
      console.error(ERR.requestFailed, error.message);
    }
  } else {
    throw new Error(ERR.noUserName);
  }
}

async function fetchMediumData() {
  if (MEDIUM_USERNAME !== undefined) {
    try {
      console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
      
      parse(`https://api.medium.com/feed/@${MEDIUM_USERNAME}`).then(rss => {
        fs.writeFile(
          "./public/blogs.json",
          JSON.stringify(rss),
          function (err) {
            if (err) return console.log(err);
            console.log("saved file to public/blogs.json");
          }
        );
      });
    } catch (error) {
      console.error(ERR.requestFailedMedium, error.message);
    }
  }
}

fetchGitHubData();
fetchMediumData();
