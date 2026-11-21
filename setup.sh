#!/bin/bash
# Hillcrest College Project Setup Script

echo "🚀 Setting up Hillcrest College Digital Transformation Project..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 2. Create .env.local from example
if [ ! -f .env.local ]; then
  echo "📝 Creating .env.local..."
  cp .env.example .env.local
  echo "⚠️  Please edit .env.local with your Supabase credentials"
fi

# 3. Create favicon placeholder
echo "🎨 Creating favicon placeholder..."
echo "Please replace public/favicon.ico with your actual favicon"

# 4. Verify installation
echo "✅ Verifying installation..."

if [ -f "node_modules/.package.json" ]; then
  echo "✅ Dependencies installed successfully"
else
  echo "❌ Dependency installation incomplete"
  exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Supabase credentials"
echo "2. Create your favicon in public/favicon.ico"
echo "3. Add your actual hilltop photos to public/images/"
echo "4. Run: npm run dev"
echo ""
echo "Visit http://localhost:3000 to see your project"