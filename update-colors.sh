#!/bin/bash

# Update all color references across the codebase
# Replace blue with primary navy
# Replace green with secondary gold
# Replace orange with accent orange

find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i \
  -e 's/bg-blue-600/bg-primary/g' \
  -e 's/bg-blue-700/bg-primary-700/g' \
  -e 's/bg-blue-500/bg-primary-500/g' \
  -e 's/bg-blue-400/bg-primary-400/g' \
  -e 's/bg-blue-50/bg-primary-50/g' \
  -e 's/bg-blue-100/bg-primary-100/g' \
  -e 's/text-blue-600/text-primary/g' \
  -e 's/text-blue-500/text-primary-500/g' \
  -e 's/text-blue-400/text-secondary/g' \
  -e 's/text-blue-300/text-secondary/g' \
  -e 's/hover:bg-blue-700/hover:bg-primary-700/g' \
  -e 's/hover:bg-blue-600/hover:bg-primary-700/g' \
  -e 's/hover:bg-blue-50/hover:bg-primary-50/g' \
  -e 's/hover:text-blue-600/hover:text-primary/g' \
  -e 's/hover:text-blue-500/hover:text-secondary/g' \
  -e 's/hover:text-blue-400/hover:text-secondary/g' \
  -e 's/border-blue-600/border-primary/g' \
  -e 's/border-blue-500/border-secondary/g' \
  -e 's/border-blue-400/border-secondary/g' \
  -e 's/from-blue-600/from-primary/g' \
  -e 's/to-blue-700/to-primary-700/g' \
  -e 's/to-blue-600/to-primary/g' \
  -e 's/bg-green-600/bg-secondary/g' \
  -e 's/bg-green-500/bg-secondary/g' \
  -e 's/text-green-600/text-secondary/g' \
  -e 's/text-green-500/text-secondary/g' \
  -e 's/hover:bg-green-700/hover:bg-secondary-600/g' \
  -e 's/bg-orange-500/bg-accent/g' \
  -e 's/bg-orange-600/bg-accent-600/g' \
  -e 's/hover:bg-orange-600/hover:bg-accent-600/g' \
  -e 's/hover:bg-orange-500/hover:bg-accent-600/g' \
  -e 's/text-orange-600/text-accent/g' \
  -e 's/bg-indigo-/bg-primary-/g' \
  -e 's/text-indigo-/text-primary-/g' \
  -e 's/bg-purple-/bg-primary-/g' \
  -e 's/text-purple-/text-primary-/g' \
  -e 's/bg-violet-/bg-primary-/g' \
  -e 's/text-violet-/text-primary-/g' \
  {} +

echo "Color update complete!"
