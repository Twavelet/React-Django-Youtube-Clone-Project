from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_comments),
    path('<int:pk>/', views.put_comments),
    path('get/<int:pk>/', views.get_comments)
]