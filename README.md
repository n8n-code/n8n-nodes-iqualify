# @n8n-dev/n8n-nodes-iqualify

![iqualify Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-iqualify.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-iqualify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing iqualify API integrations by hand.**

Every time you connect n8n to iqualify, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to iqualify took 5 minutes, not half a day?**

This node gives you **16+ resources** out of the box: **API Info**, **Course Mappings**, **Courses**, **Course Metadata**, **Offerings**, and 11 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-iqualify
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-iqualify`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **iqualify API** → paste your API key
3. Drag the **iqualify** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>API Info</b> (1 operations)</summary>

- Get List supported endpoints URLs

</details>

<details>
<summary><b>Course Mappings</b> (4 operations)</summary>

- Get Find course mappings
- Get Find course mappings by externalCourseId
- Delete Remove course mapping
- Put Add course mapping

</details>

<details>
<summary><b>Courses</b> (4 operations)</summary>

- Get Find courses
- Get Find activations for a contentId
- Get Find users who have access to the contentId provided
- Post Update course access

</details>

<details>
<summary><b>Course Metadata</b> (4 operations)</summary>

- Put Update course category
- Put Update course level
- Put Update course tags
- Put Update course topic

</details>

<details>
<summary><b>Offerings</b> (8 operations)</summary>

- Get Find current past and future offerings
- Post Create offering
- Get Find active offerings
- Get Find scheduled offerings
- Get Find offerings where info field matches the specified textPattern
- Get Find past offerings
- Get Offerings summary
- Patch Update offering

</details>

<details>
<summary><b>Assessment Management</b> (7 operations)</summary>

- Get Find offering s activities
- Get Find offering s assessments
- Patch Update assessment details
- Delete Remove assessment document
- Get Find learners with assessments pending x days before due date within the specified offeringId
- Delete Reset user s assessment to draft state
- Get Find learner s open response assessment submissions

</details>

<details>
<summary><b>Assessment Data</b> (5 operations)</summary>

- Get Find open response activity attempts
- Get Find assessment marks
- Get Find quiz marks
- Get Find submissions to assessments including marks if any
- Get Find submissions to a specified open response assessment including marks if any

</details>

<details>
<summary><b>Channels</b> (9 operations)</summary>

- Get Find comments
- Get Find posts
- Get Find replies
- Get Find channels
- Post Add channel
- Patch Update channel
- Delete Remove learners from a group channel
- Get Find learners in a group channel
- Post Add learners to a group channel

</details>

<details>
<summary><b>Learner Activity</b> (6 operations)</summary>

- Get Find learner progress in a specified offering
- Get Find shared social notes in an offering
- Get Find unit reactions
- Get Find learner progress in all offerings
- Get Find learner s progress in a specified offering
- Get Find learner s progress in offerings

</details>

<details>
<summary><b>Pulses</b> (2 operations)</summary>

- Get Find all pulse IDs in the specified offering
- Get Find pulses by offeringId

</details>

<details>
<summary><b>Badges</b> (3 operations)</summary>

- Get Find offering badges
- Post Award badge
- Get Find user s badges

</details>

<details>
<summary><b>Assessment Groups</b> (5 operations)</summary>

- Get Find assessment groups
- Post Add an assessment group
- Get Find learners in an assessment group
- Post Add a learner to an assessment group
- Delete Remove a learner from an assessment group

</details>

<details>
<summary><b>Offering Metadata</b> (4 operations)</summary>

- Put Update offering category metadata
- Put Update offering level metadata
- Put Update offering tags metadata
- Put Update offering topic metadata

</details>

<details>
<summary><b>Offering Learners</b> (7 operations)</summary>

- Get Find offering s users
- Post Adds user to the offering
- Delete Remove learners from coach s marking list
- Get Find Learners marked by a coach
- Post Add learners to be marked by a coach
- Delete Removes user from the offering
- Patch Transfer a user between offerings

</details>

<details>
<summary><b>Organisation</b> (1 operations)</summary>

- Get s the current organisation

</details>

<details>
<summary><b>Users In I Qualify</b> (8 operations)</summary>

- Post Add new user
- Get Find user by email
- Patch Update user
- Post Resend invitation email
- Get Find user s offerings
- Post Adds the user to the specified offerings as a learner
- Post Add permission to user
- Put Suspend user

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from iqualify docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official iqualify OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **iqualify** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the iqualify API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
