from django.urls import path
from .views import ProjectList,FeedbackList
app_name = 'core'

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project_list'),
    path('feedback/', FeedbackList.as_view(), name='feedback_list'),
]