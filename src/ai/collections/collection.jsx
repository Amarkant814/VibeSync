// // components/collections/CollectionsPage.jsx
// import React, { useState } from 'react';
// import { Plus, Book, Users, Calendar, ArrowRight } from 'lucide-react';
// import CreateCollection from './CreateCollection';
// import './collections.css';

// const CollectionsPage = () => {
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [collections, setCollections] = useState([
//     {
//       id: 1,
//       name: 'Travel & Adventure',
//       questionsCount: 12,
//       createdAt: '2024-01-15',
//       description: 'Questions about travel experiences and adventure preferences',
//       category: 'Lifestyle'
//     },
//     {
//       id: 2,
//       name: 'Work & Career',
//       questionsCount: 8,
//       createdAt: '2024-01-10',
//       description: 'Professional life and career-related questions',
//       category: 'Professional'
//     },
//     {
//       id: 3,
//       name: 'Food & Dining',
//       questionsCount: 15,
//       createdAt: '2024-01-08',
//       description: 'Culinary preferences and food-related topics',
//       category: 'Lifestyle'
//     }
//   ]);

//   const handleCreateCollection = (newCollection) => {
//     const collection = {
//       id: Date.now(),
//       ...newCollection,
//       createdAt: new Date().toISOString().split('T')[0],
//       questionsCount: newCollection.questions.length
//     };
//     setCollections(prev => [collection, ...prev]);
//     setShowCreateForm(false);
//   };

//   const handleEditCollection = (collectionId) => {
//     // Handle edit functionality
//     console.log('Edit collection:', collectionId);
//   };

//   const handleDeleteCollection = (collectionId) => {
//     setCollections(prev => prev.filter(c => c.id !== collectionId));
//   };

//   if (showCreateForm) {
//     return (
//       <CreateCollection 
//         onSave={handleCreateCollection}
//         onCancel={() => setShowCreateForm(false)}
//       />
//     );
//   }

//   return (
//     <div className="collections-page">
//       {/* Header */}
//       <div className="collections-header">
//         <div className="header-content">
//           <h1 className="page-title">Collections</h1>
//           <p className="page-subtitle">Create and manage your question collections to discover like-minded people</p>
//         </div>
//         <button 
//           className="create-collection-btn"
//           onClick={() => setShowCreateForm(true)}
//         >
//           <Plus className="btn-icon" />
//           Create Collection
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Book className="icon" />
//           </div>
//           <div className="stat-content">
//             <div className="stat-number">{collections.length}</div>
//             <div className="stat-label">Total Collections</div>
//           </div>
//         </div>
        
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Users className="icon" />
//           </div>
//           <div className="stat-content">
//             <div className="stat-number">{collections.reduce((sum, c) => sum + c.questionsCount, 0)}</div>
//             <div className="stat-label">Total Questions</div>
//           </div>
//         </div>
        
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Calendar className="icon" />
//           </div>
//           <div className="stat-content">
//             <div className="stat-number">3</div>
//             <div className="stat-label">Active This Month</div>
//           </div>
//         </div>
//       </div>

//       {/* Collections Grid */}
//       <div className="collections-grid">
//         {collections.map((collection) => (
//           <div key={collection.id} className="collection-card">
//             <div className="collection-header">
//               <div className="collection-category">{collection.category}</div>
//               <div className="collection-actions">
//                 <button 
//                   className="action-btn edit-btn"
//                   onClick={() => handleEditCollection(collection.id)}
//                 >
//                   Edit
//                 </button>
//                 <button 
//                   className="action-btn delete-btn"
//                   onClick={() => handleDeleteCollection(collection.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
            
//             <div className="collection-content">
//               <h3 className="collection-name">{collection.name}</h3>
//               <p className="collection-description">{collection.description}</p>
              
//               <div className="collection-meta">
//                 <div className="meta-item">
//                   <span className="meta-label">Questions:</span>
//                   <span className="meta-value">{collection.questionsCount}</span>
//                 </div>
//                 <div className="meta-item">
//                   <span className="meta-label">Created:</span>
//                   <span className="meta-value">{new Date(collection.createdAt).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="collection-footer">
//               <button className="view-collection-btn">
//                 View Questions
//                 <ArrowRight className="btn-icon" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {collections.length === 0 && (
//         <div className="empty-state">
//           <div className="empty-icon">
//             <Book className="icon" />
//           </div>
//           <h3 className="empty-title">No Collections Yet</h3>
//           <p className="empty-description">
//             Create your first collection to start organizing your questions by themes and topics.
//           </p>
//           <button 
//             className="create-first-btn"
//             onClick={() => setShowCreateForm(true)}
//           >
//             <Plus className="btn-icon" />
//             Create Your First Collection
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CollectionsPage;

// // =====================================
// // components/collections/CreateCollection.jsx
// import React, { useState } from 'react';
// import { ArrowLeft, Plus, Trash2, GripVertical, Save } from 'lucide-react';
// import './collections.css';

// const CreateCollection = ({ onSave, onCancel, editData = null }) => {
//   const [formData, setFormData] = useState({
//     name: editData?.name || '',
//     description: editData?.description || '',
//     category: editData?.category || 'Lifestyle',
//     questions: editData?.questions || [
//       { id: 1, text: 'What type of vacation do you prefer most?' },
//       { id: 2, text: 'How important is work-life balance to you?' }
//     ]
//   });

//   const [errors, setErrors] = useState({});
//   const [draggedItem, setDraggedItem] = useState(null);

//   const categories = ['Lifestyle', 'Professional', 'Relationships', 'Hobbies', 'Values', 'Entertainment'];

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }));
//     }
//   };

//   const handleQuestionChange = (questionId, newText) => {
//     setFormData(prev => ({
//       ...prev,
//       questions: prev.questions.map(q => 
//         q.id === questionId ? { ...q, text: newText } : q
//       )
//     }));
//   };

//   const addQuestion = () => {
//     const newQuestion = {
//       id: Date.now(),
//       text: ''
//     };
//     setFormData(prev => ({
//       ...prev,
//       questions: [...prev.questions, newQuestion]
//     }));
//   };

//   const removeQuestion = (questionId) => {
//     setFormData(prev => ({
//       ...prev,
//       questions: prev.questions.filter(q => q.id !== questionId)
//     }));
//   };

//   const handleDragStart = (e, index) => {
//     setDraggedItem(index);
//     e.dataTransfer.effectAllowed = 'move';
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   };

//   const handleDrop = (e, dropIndex) => {
//     e.preventDefault();
    
//     if (draggedItem === null) return;
    
//     const newQuestions = [...formData.questions];
//     const draggedQuestion = newQuestions[draggedItem];
    
//     // Remove the dragged item
//     newQuestions.splice(draggedItem, 1);
    
//     // Insert at the new position
//     newQuestions.splice(dropIndex, 0, draggedQuestion);
    
//     setFormData(prev => ({ ...prev, questions: newQuestions }));
//     setDraggedItem(null);
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Collection name is required';
//     }
    
//     if (!formData.description.trim()) {
//       newErrors.description = 'Description is required';
//     }
    
//     if (formData.questions.length === 0) {
//       newErrors.questions = 'At least one question is required';
//     }
    
//     const emptyQuestions = formData.questions.filter(q => !q.text.trim());
//     if (emptyQuestions.length > 0) {
//       newErrors.questions = 'All questions must have text';
//     }
    
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
    
//     onSave(formData);
//   };

//   return (
//     <div className="create-collection-page">
//       {/* Header */}
//       <div className="create-header">
//         <button className="back-btn" onClick={onCancel}>
//           <ArrowLeft className="btn-icon" />
//           Back to Collections
//         </button>
//         <h1 className="page-title">
//           {editData ? 'Edit Collection' : 'Create New Collection'}
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="create-form">
//         {/* Basic Information */}
//         <div className="form-section">
//           <h2 className="section-title">Basic Information</h2>
          
//           <div className="form-grid">
//             <div className="form-group">
//               <label className="form-label">Collection Name *</label>
//               <input
//                 type="text"
//                 className={`form-input ${errors.name ? 'error' : ''}`}
//                 placeholder="e.g., Travel & Adventure"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//               />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Category</label>
//               <select
//                 className="form-select"
//                 value={formData.category}
//                 onChange={(e) => handleInputChange('category', e.target.value)}
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="form-group">
//             <label className="form-label">Description *</label>
//             <textarea
//               className={`form-textarea ${errors.description ? 'error' : ''}`}
//               placeholder="Describe what this collection is about..."
//               rows="3"
//               value={formData.description}
//               onChange={(e) => handleInputChange('description', e.target.value)}
//             />
//             {errors.description && <span className="error-message">{errors.description}</span>}
//           </div>
//         </div>

//         {/* Questions Section */}
//         <div className="form-section">
//           <div className="section-header">
//             <h2 className="section-title">Questions ({formData.questions.length})</h2>
//             <button
//               type="button"
//               className="add-question-btn"
//               onClick={addQuestion}
//             >
//               <Plus className="btn-icon" />
//               Add Question
//             </button>
//           </div>
          
//           {errors.questions && <span className="error-message">{errors.questions}</span>}
          
//           <div className="questions-list">
//             {formData.questions.map((question, index) => (
//               <div
//                 key={question.id}
//                 className="question-item"
//                 draggable
//                 onDragStart={(e) => handleDragStart(e, index)}
//                 onDragOver={handleDragOver}
//                 onDrop={(e) => handleDrop(e, index)}
//               >
//                 <div className="question-drag-handle">
//                   <GripVertical className="drag-icon" />
//                   <span className="question-number">{index + 1}</span>
//                 </div>
                
//                 <div className="question-content">
//                   <textarea
//                     className="question-input"
//                     placeholder="Enter your question here..."
//                     value={question.text}
//                     onChange={(e) => handleQuestionChange(question.id, e.target.value)}
//                     rows="2"
//                   />
//                 </div>
                
//                 <button
//                   type="button"
//                   className="delete-question-btn"
//                   onClick={() => removeQuestion(question.id)}
//                   disabled={formData.questions.length === 1}
//                 >
//                   <Trash2 className="btn-icon" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Form Actions */}
//         <div className="form-actions">
//           <button
//             type="button"
//             className="cancel-btn"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="save-btn"
//           >
//             <Save className="btn-icon" />
//             {editData ? 'Update Collection' : 'Create Collection'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateCollection;