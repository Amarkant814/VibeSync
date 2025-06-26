import React, { useState } from 'react';
import { Plus, Book, Users, Calendar, ArrowRight } from 'lucide-react';
import CreateCollection from './CreateCollection';

const CollectionsPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: 'Travel & Adventure',
      questionsCount: 12,
      createdAt: '2024-01-15',
      description: 'Questions about travel experiences and adventure preferences',
      category: 'Lifestyle'
    },
    {
      id: 2,
      name: 'Work & Career',
      questionsCount: 8,
      createdAt: '2024-01-10',
      description: 'Professional life and career-related questions',
      category: 'Professional'
    },
    {
      id: 3,
      name: 'Food & Dining',
      questionsCount: 15,
      createdAt: '2024-01-08',
      description: 'Culinary preferences and food-related topics',
      category: 'Lifestyle'
    }
  ]);

  const handleCreateCollection = (newCollection) => {
    const collection = {
      id: Date.now(),
      ...newCollection,
      createdAt: new Date().toISOString().split('T')[0],
      questionsCount: newCollection.questions.length
    };
    setCollections(prev => [collection, ...prev]);
    setShowCreateForm(false);
  };

  const handleEditCollection = (collectionId) => {
    // Handle edit functionality
    console.log('Edit collection:', collectionId);
  };

  const handleDeleteCollection = (collectionId) => {
    setCollections(prev => prev.filter(c => c.id !== collectionId));
  };

  if (showCreateForm) {
    return (
      <CreateCollection 
        onSave={handleCreateCollection}
        onCancel={() => setShowCreateForm(false)}
      />
    );
  }

  return (
    <div className="collections-page">
      {/* Header */}
      <div className="collections-header">
        <div className="header-content">
          <h1 className="page-title">Collections</h1>
          <p className="page-subtitle">Create and manage your question collections to discover like-minded people</p>
        </div>
        <button 
          className="create-collection-btn"
          onClick={() => setShowCreateForm(true)}
        >
          <Plus className="btn-icon" />
          Create Collection
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Book className="icon" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{collections.length}</div>
            <div className="stat-label">Total Collections</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Users className="icon" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{collections.reduce((sum, c) => sum + c.questionsCount, 0)}</div>
            <div className="stat-label">Total Questions</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Calendar className="icon" />
          </div>
          <div className="stat-content">
            <div className="stat-number">3</div>
            <div className="stat-label">Active This Month</div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <div className="collection-header">
              <div className="collection-category">{collection.category}</div>
              <div className="collection-actions">
                <button 
                  className="action-btn edit-btn"
                  onClick={() => handleEditCollection(collection.id)}
                >
                  Edit
                </button>
                <button 
                  className="action-btn delete-btn"
                  onClick={() => handleDeleteCollection(collection.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            
            <div className="collection-content">
              <h3 className="collection-name">{collection.name}</h3>
              <p className="collection-description">{collection.description}</p>
              
              <div className="collection-meta">
                <div className="meta-item">
                  <span className="meta-label">Questions:</span>
                  <span className="meta-value">{collection.questionsCount}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Created:</span>
                  <span className="meta-value">{new Date(collection.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="collection-footer">
              <button className="view-collection-btn">
                View Questions
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {collections.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <Book className="icon" />
          </div>
          <h3 className="empty-title">No Collections Yet</h3>
          <p className="empty-description">
            Create your first collection to start organizing your questions by themes and topics.
          </p>
          <button 
            className="create-first-btn"
            onClick={() => setShowCreateForm(true)}
          >
            <Plus className="btn-icon" />
            Create Your First Collection
          </button>
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;