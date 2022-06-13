import React from "react";

const Blog = () => {
  return (
    <div className="container my-4">
      <div className="mb-3 text-center">
        <h2 className=" text-info">Blogs</h2>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>

      <div>
        <h4>Question-1: Difference between authorization and authentication</h4>
        <p>
          {" "}
          <span className="text-info">Ans:</span> Authentication is the process
          of verifying someone, whereas authorization is the process of
          verifying which user has access to a particular application, file, and
          data. The situation is like an airline that has to decide which person
          can come on board. The first step is to confirm the identity of a
          passenger so that they know who they are. Once a passenger has been
          identified, the second step is to verify a special service that the
          passenger has access to, whether it is first-class flying or going to
          the VIP lounge.
        </p>
        <ul>
          <h6>Authentication</h6>
          <li>Authentication verifies who the user is.</li>
          <li>
            Authentication works through passwords, one-time PINs, biometric
            data and other information provided or provided by the user.
          </li>
          <li>
            Authentication is the first step in a good identity and access
            management process.
          </li>
        </ul>

        <ul>
          <h6>Authorization</h6>
          <li>Authorization determines what resources a user can access.</li>
          <li>
            Authorization works through settings that are implemented and
            maintained by the organization.
          </li>
          <li>Authorization always takes place after authentication.</li>
        </ul>
      </div>

      <div>
        <h4>
          Question-2: Why are you using firebase? What other options do you have
          to implement authentication?
        </h4>

        <p>
          {" "}
          <span className="text-info">Ans:</span> Firebase, Backend-as-a-Service
          (BaaS), is Google's platform that provides functionality and helps
          with the backend development of your Android, iOS or web, and even
          some products that support Unity3D.
          <br />
          Top functions are:
          <br />
          Firebase Database: Used to store user data such as chat messages, user
          details and other metadata
          <br />
          Firebase Cloud Storage: Used to store user-created content such as
          profile pictures, multimedia messages, etc.
          <br />
          Firebase Cloud Messaging: Used to send notifications
          <br />
          Firebase Remote Config: Used for A / B testing
        </p>
      </div>

      <div>
        <h4>
          Question-3: What other services does firebase provide other than
          authentication?
        </h4>
        <p>
          <span className="text-info">
            Ans: Even though Firebase is all about great features, there are
            some downsides to using it. Here are some of them.
            <ul>
              <li>Authentication System</li>
              <li>Deploy Firebase</li>
              <li>Not all its services are free to start</li>
              <li>Only offers NoSQL databases</li>
              <li>It has vendor lock-in</li>
              <li>Slow queries</li>
              <li>It runs entirely on Google Cloud</li>
              <li>Doesn’t offer GraphQL APIs as part of the standard setup</li>
              <li>
                It’s a subdomain from Google so it doesn’t work in many
                countries{" "}
              </li>
              <li>No options for Enterprise support or dedicated servers</li>
              <li>
                It’s not open source so it lacks flexibility and customization
                to adapt its code
              </li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
