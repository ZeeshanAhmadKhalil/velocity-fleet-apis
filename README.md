# Velocity Fleet APIs

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

## Overview

Velocity Fleet APIs provides a comprehensive backend solution for fleet management applications. This document outlines the technology stack required for frontend integration.

## Base URL

```
https://velocity-fleet-apis-d7d5527ad5c2.herokuapp.com
```

## API Docs

```
https://velocity-fleet-apis-d7d5527ad5c2.herokuapp.com/api
```

## Required Technology Stack

### 1. React Native Expo
- Use Expo for cross-platform mobile development
- Ensure compatibility with the latest Expo SDK

### 2. RTK Query
- Implement data fetching and caching
- Handle API state management efficiently

### 3. Redux Persist
- Persist Redux state across app sessions
- Maintain user authentication state

### 4. React Navigation
- Implement navigation between screens
- Handle authentication flow navigation

## API Endpoints

The following endpoints are available for integration:

- **Authentication**: `/auth/register`, `/auth/login`
- **Users**: `/user`
- **Categories**: `/category`
- **Cars**: `/car`

All endpoints require proper authentication headers and follow RESTful conventions.

## Getting Started

1. Set up your React Native Expo project
2. Install the required dependencies
3. Configure the base URL in your API configuration
4. Implement authentication flow
5. Build your fleet management features