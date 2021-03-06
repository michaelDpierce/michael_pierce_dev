// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
};
