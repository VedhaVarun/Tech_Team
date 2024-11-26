# MCF Integration Platform

A modern solution designed to help small and medium businesses efficiently connect with Amazon's Multi-Channel Fulfillment service. This platform streamlines inventory management, order processing, and fulfillment operations through an intuitive interface.

## 🚀 Features

### 📦 Inventory Management 
- Real-time stock synchronization
- Automated stock updates
- Low stock alerts 
- Inventory tracking

### 🛒 Order Processing
- One-click fulfillment
- Automated order routing
- Status tracking
- Customer notifications

### 📊 Analytics Dashboard
- Real-time metrics
- Performance analytics
- Sales tracking
- Inventory insights

## 💻 Tech Stack

- **Frontend:** React.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Message Queue:** RabbitMQ
- **Deployment:** Docker

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/VedhaVarun/Tech_Team.git
cd Tech_Team
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd src/frontend
npm install
cd ../..
```

3. Configure environment variables
```bash
cp .env.example .env
# Update .env with your configurations
```

4. Start Docker services
```bash
docker-compose up -d
```

5. Run the application
```bash
npm run dev

# Access the application at:
# Frontend: http://localhost:3001
# Backend API: http://localhost:4001
```

## 📱 Screenshots

### Dashboard
![Dashboard](/screenshot/dashboard.png)
*Main dashboard showing key metrics and notifications*

### Inventory Management
![Inventory](/screenshot/inventory.png)
*Inventory management interface with real-time updates*

### Order Processing
![Orders](/screenshot/orders.png)
*Order processing and tracking interface*

## 🛠️ API Documentation

### Inventory Management
```typescript
GET /api/v1/inventory          // Get inventory list
POST /api/v1/inventory/sync    // Sync with MCF
PUT /api/v1/inventory/:sku     // Update inventory item
```

### Order Management
```typescript
GET /api/v1/orders            // Get orders
POST /api/v1/orders           // Create order
GET /api/v1/orders/:id        // Get order details
PUT /api/v1/orders/:id/status // Update order status
```

## 📈 Future Enhancements

- AI-powered inventory predictions
- Advanced analytics features
- Mobile application
- Multi-language support
- Enhanced reporting

## 🐛 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process using port 3001
sudo kill -9 $(lsof -t -i:3001)

# Kill process using port 4001
sudo kill -9 $(lsof -t -i:4001)
```

### Docker Issues
```bash
# Restart Docker services
docker-compose down
docker-compose up -d
```

## 📁 Project Structure
```
mcf-platform/
├── src/
│   ├── frontend/          # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   └── public/
│   ├── services/          # Backend services
│   │   ├── inventory/
│   │   ├── orders/
│   │   └── analytics/
│   └── api/              # API gateway
├── docker/
└── docs/
```

## 🚦 Available Scripts

```bash
# Development
npm run dev              # Start all services
npm run dev:frontend     # Start frontend only
npm run dev:services     # Start backend only

# Build
npm run build           # Build all packages

# Test
npm test               # Run all tests
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch 
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For issues:
1. Check documentation
2. Review common issues section
3. Open GitHub issue

Need more help? Create an issue with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## 👥 Team

- [Vedha Varun] 
- [Deepika] 
- [Sougandhika] 
- [Teja] 

## 🙏 Acknowledgments

- Amazon MCF documentation
- Open source community
- React and Node.js communities
- Docker and MongoDB teams

## Deployment Link of the Project : 
[https://famous-starburst-ead7c9.netlify.app/]([url](https://famous-starburst-ead7c9.netlify.app/))

---
Made with ❤️ by Team Tech
```
